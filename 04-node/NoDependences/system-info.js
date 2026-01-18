import os from 'node:os';

console.log(`
    Información del sistema operativo
    
    Tipo de OS:                                ${os.type()}
    Plataforma:                                ${os.platform()}
    Arquitectura:                              ${os.arch()}
    Memoria total (bytes):                     ${os.totalmem()}
    Memoria libre (bytes):                     ${os.freemem()}
    Directorio home del usuario:               ${os.homedir()}
    Tiempo de actividad del sistema (segundo): ${Math.floor(
      os.uptime() / 60 / 60 / 24
    )} Days
    CPUS:                                      ${os.cpus()}
    Interfaces de red:                         ${os.networkInterfaces()}
    ----------------------------------------------------

    Información adicional

    Numeros de nucleos de CPU:                 ${os.cpus().length}
    Hostname del sistema:                      ${os.hostname()}
    Versión del SO:                            ${os.release()}
    `);

console.log(`
    Información del sistema operativo
    
    Tipo de OS:                                ${os.type()}
    Plataforma:                                ${os.platform()}
    Arquitectura:                              ${os.arch()}
    Memoria total (bytes):                     ${os.totalmem()}
    Memoria libre (bytes):                     ${os.freemem()}
    Directorio home del usuario:               ${os.homedir()}
    Tiempo de actividad del sistema (segundo): ${Math.floor(
      os.uptime() / 60 / 60 / 24
    )} Days
    CPUS:                                      ${os.cpus()}
    Interfaces de red:                         ${os.networkInterfaces()}
    ----------------------------------------------------

    Información adicional

    Numeros de nucleos de CPU:                 ${os.cpus().length}
    Hostname del sistema:                      ${os.hostname()}
    Versión del SO:                            ${os.release()}
    `);
