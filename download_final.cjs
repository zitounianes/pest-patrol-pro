const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'cucarachas.jpg': 'https://upload.wikimedia.org/wikipedia/commons/a/a2/American_cockroach.jpg',
  'roedores.jpg': 'https://upload.wikimedia.org/wikipedia/commons/0/01/Rattus_norvegicus_1.jpg',
  'hormigas.jpg': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Weaver_ants_-_Oecophylla_smaragdina.jpg',
  'termitas.jpg': 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Coptotermes_formosanus_shiraki.jpg',
  'mosquitos.jpg': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Aedes_aegypti_biting_human.jpg',
  'chinches.jpg': 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Bed_bug%2C_Cimex_lectularius.jpg',
  'desinsectacion.jpg': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Fumigating_for_mosquitoes_in_Florida.jpg',
  'desratizacion.jpg': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Victor_Rat_Trap.jpg',
  'desinfeccion.jpg': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Disinfecting_public_spaces_during_COVID-19_pandemic_in_Rwanda_05.jpg',
  'fumigacion.jpg': 'https://upload.wikimedia.org/wikipedia/commons/d/df/Structural_fumigation.jpg',
  'madera.jpg': 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Woodworm_damage.jpg',
  'aves.jpg': 'https://upload.wikimedia.org/wikipedia/commons/0/03/Bird_spikes_on_a_sign.jpg'
};

const dir = path.join(process.cwd(), 'public', 'expressive');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function download(filename, url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'CoolBot/1.0 (someemail@gmail.com)' } }, (res) => {
      if (res.statusCode === 200) {
        const stream = fs.createWriteStream(path.join(dir, filename));
        res.pipe(stream);
        stream.on('finish', () => resolve(`Downloaded ${filename}`));
      } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // handle redirect
        resolve(download(filename, res.headers.location.startsWith('http') ? res.headers.location : `https://upload.wikimedia.org${res.headers.location}`));
      } else {
        resolve(`Failed ${filename} | status: ${res.statusCode}`);
      }
    }).on('error', (e) => resolve(`Error ${filename}: ${e.message}`));
  });
}

(async () => {
    for (const [filename, url] of Object.entries(images)) {
        console.log(await download(filename, url));
    }
})();
