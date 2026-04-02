const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'cucarachas.jpg': 'https://image.pollinations.ai/prompt/macro%20close%20up%20photography%20of%20a%20roach%20insect%20on%20a%20clean%20surface,%20dramatic%20cinematic%20lighting,%20photorealistic?width=800&height=600&nologo=true',
  'roedores.jpg': 'https://image.pollinations.ai/prompt/cinematic%20shadow%20of%20a%20rat%20mouse%20running%20along%20a%20wooden%20baseboard%20in%20a%20dark%20house,%20suspenseful,%20photorealistic?width=800&height=600&nologo=true',
  'hormigas.jpg': 'https://image.pollinations.ai/prompt/a%20long%20line%20of%20ants%20marching%20across%20a%20white%20modern%20kitchen%20counter,%20macro%20photography,%20high%20detail?width=800&height=600&nologo=true',
  'termitas.jpg': 'https://image.pollinations.ai/prompt/close%20up%20of%20heavily%20damaged%20wood%20beam%20eaten%20by%20termites%20with%20sawdust,%20macro%20photography,%20dramatic%20lighting?width=800&height=600&nologo=true',
  'mosquitos.jpg': 'https://image.pollinations.ai/prompt/a%20macro%20shot%20of%20a%20mosquito%20resting%20on%20a%20green%20leaf%20at%20sunset,%20glowing%20golden%20hour%20light,%20high%20detail?width=800&height=600&nologo=true',
  'chinches.jpg': 'https://image.pollinations.ai/prompt/macro%20photography%20real%20life%20bed%20bug%20hidden%20in%20the%20seam%20of%20a%20white%20mattress,%20high%20detail,%20scary?width=800&height=600&nologo=true',
  'desinsectacion.jpg': 'https://image.pollinations.ai/prompt/professional%20pest%20control%20technician%20spraying%20insecticide%20in%20a%20modern%20kitchen,%20cinematic%20lighting,%204k,%20photorealistic?width=800&height=600&nologo=true',
  'desratizacion.jpg': 'https://image.pollinations.ai/prompt/a%20modern%20humane%20high-tech%20rat%20mouse%20trap%20placed%20securely%20on%20a%20clean%20floor,%20cinematic,%20professional?width=800&height=600&nologo=true',
  'desinfeccion.jpg': 'https://image.pollinations.ai/prompt/worker%20in%20hazmat%20suit%20and%20respirator%20disinfecting%20a%20corporate%20office%20with%20a%20fogger,%20cinematic,%20dramatic%20lighting?width=800&height=600&nologo=true',
  'fumigacion.jpg': 'https://image.pollinations.ai/prompt/massive%20shipping%20containers%20being%20fumigated%20with%20gas%20industrial%20setting,%20dramatic%20lighting?width=800&height=600&nologo=true',
  'madera.jpg': 'https://image.pollinations.ai/prompt/antique%20wooden%20beam%20receiving%20deep%20injection%20pest%20treatment%20for%20woodworms,%20close%20up,%20professional?width=800&height=600&nologo=true',
  'aves.jpg': 'https://image.pollinations.ai/prompt/anti-bird%20spikes%20installed%20on%20a%20beautiful%20classic%20European%20building%20edge,%20clear%20sky,%20cinematic?width=800&height=600&nologo=true'
};

const dir = path.join(process.cwd(), 'public', 'expressive');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function download(filename, url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        const stream = fs.createWriteStream(path.join(dir, filename));
        res.pipe(stream);
        stream.on('finish', () => resolve(`Downloaded ${filename}`));
      } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(download(filename, res.headers.location.startsWith('http') ? res.headers.location : `https://image.pollinations.ai${res.headers.location}`));
      } else {
        resolve(`Failed ${filename} | status: ${res.statusCode}`);
      }
    }).on('error', (e) => resolve(`Error ${filename}: ${e.message}`));
  });
}

(async () => {
    console.log("Starting downloads...");
    for (const [filename, url] of Object.entries(images)) {
        console.log(await download(filename, url));
    }
    console.log("All done!");
})();
