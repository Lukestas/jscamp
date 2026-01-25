import { DEFAULTS } from '../config.js';
import { JobModel } from '../models/job.js';

export class JobController {
  static async getAll(req, res) {
    const {
      text,
      title,
      level,
      limit = DEFAULTS.LIMIT_PAGINATION,
      technology,
      offset = DEFAULTS.LIMIT_OFFSET,
    } = req.query;

    const jobs = await JobModel.getAll({
      text,
      title,
      level,
      limit,
      technology,
      offset,
    });

    return res.status(200).json({
      data: jobs.paginatedJobs,
      total: jobs.total,
      limit: jobs.limitNumber,
      offset: jobs.offsetNumber,
    });
  }
  static async getId(req, res) {
    const { id } = req.params;

    const job = await JobModel.getById({ id });
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    return res.status(200).json(job);
  }
  static async create(req, res) {
    const { titulo, empresa, ubicacion, descripcion, data, content } = req.body;
    const newJob = await JobModel.create({
      titulo,
      empresa,
      ubicacion,
      descripcion,
      data,
      content,
    });
    return res.status(201).json(newJob);
  }
  static async update(req, res) {
    const { id } = req.params;
    const { titulo, empresa, ubicacion, descripcion, data, content } = req.body;
    if (!id) {
      return res
        .status(400)
        .json({ message: 'Job identification is required' });
    }

    if (
      !titulo ||
      !empresa ||
      !ubicacion ||
      !descripcion ||
      !data ||
      !content
    ) {
      return res.status(400).json({
        message:
          'Method put require all job information, use Patch to replace parts of a job',
      });
    }

    const updatedJob = await JobModel.update({
      id,
      titulo,
      empresa,
      ubicacion,
      descripcion,
      data,
      content,
    });
    if (!updatedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }

    return res.status(200).json(updatedJob);
  }
  static async partialUpdate(req, res) {
    const { id } = req.params;
    const { titulo, empresa, ubicacion, descripcion, data, content } = req.body;
    if (!id) {
      res.status(400).json({ message: 'Method patch require an ID' });
    }
    const updatedJob = await JobModel.partialUpdate({
      id,
      titulo,
      empresa,
      ubicacion,
      descripcion,
      data,
      content,
    });

    if (!updatedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }
    return res.status(200).json(updatedJob);
  }
  static async delete(req, res) {
    const { id } = req.params;
    const deletedJob = await JobModel.delete({ id });
    if (!deletedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }
    return res.status(200).json(deletedJob);
  }
}
