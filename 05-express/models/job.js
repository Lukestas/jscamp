import jobsData from '../data/jobs.json' with { type: 'json' };
let jobs = jobsData;

export class JobModel {
  static async getAll({
    text,
    title,
    level,
    limit = 10,
    technology,
    offset = 0,
  }) {
    let filteredJobs = jobs;

    if (text) {
      const searchTerm = text.toLowerCase();
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.titulo.toLowerCase().includes(searchTerm) ||
          job.descripcion.toLowerCase().includes(searchTerm),
      );
    }
    if (technology) {
      const technologyTerm = technology.toLowerCase();
      filteredJobs = filteredJobs.filter((job) =>
        job.data.technology.toLowerCase().includes(technologyTerm),
      );
    }
    const limitNumber = Number(limit);
    const offsetNumber = Number(offset);

    const paginatedJobs = filteredJobs.slice(
      offsetNumber,
      offsetNumber + limitNumber,
    );

    const total = filteredJobs.length;

    return { paginatedJobs, limitNumber, offsetNumber, total };
  }
  static async getById({ id }) {
    const job = jobs.find((job) => job.id === id);
    return job;
  }
  static async create({
    titulo,
    empresa,
    ubicacion,
    descripcion,
    data,
    content,
  }) {
    const newJob = {
      id: crypto.randomUUID(),
      titulo,
      empresa,
      ubicacion,
      descripcion,
      data,
      content,
    };

    jobs.push(newJob);
    return newJob;
  }

  static async update({
    id,
    titulo,
    empresa,
    ubicacion,
    descripcion,
    data,
    content,
  }) {
    let updatedJob = null;
    jobs = jobs.map((job) => {
      if (job.id !== id) return job;
      updatedJob = {
        ...job,
        titulo,
        empresa,
        ubicacion,
        descripcion,
        data,
        content,
      };
      return updatedJob;
    });

    return updatedJob;
  }

  static async partialUpdate({
    id,
    titulo,
    empresa,
    ubicacion,
    descripcion,
    data,
    content,
  }) {
    let updatedJob;
    jobs = jobs.map((job) => {
      if (job.id !== id) return job;
      updatedJob = {
        id: job.id,
        titulo: titulo ?? job.titulo,
        empresa: empresa ?? job.empresa,
        ubicacion: ubicacion ?? job.ubicacion,
        descripcion: descripcion ?? job.descripcion,
        data: {
          technology: data.technology ?? job.data.technology,
          modalidad: data.modalidad ?? job.data.modalidad,
          nivel: data.nivel ?? job.data.nivel,
        },
        content: {
          description: content.description ?? job.content.description,
          responsibilities:
            content.responsibilities ?? job.content.responsibilities,
          requirements: content.requirements ?? job.content.requirements,
          about: content.about ?? job.content.about,
        },
      };
      return updatedJob;
    });
    return updatedJob;
  }

  static async delete({ id }) {
    let deletedJob;
    jobs = jobs.filter((job) => {
      if (job.id !== id) return true;
      deletedJob = job;
    });
    return deletedJob;
  }
}
