$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
mkdir -Force public\expressive

$urls = @{
    'cucarachas.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/American_cockroach.jpg/800px-American_cockroach.jpg'
    'roedores.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Rattus_norvegicus_1.jpg/800px-Rattus_norvegicus_1.jpg'
    'hormigas.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Weaver_ants_-_Oecophylla_smaragdina.jpg/800px-Weaver_ants_-_Oecophylla_smaragdina.jpg'
    'termitas.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Coptotermes_formosanus_shiraki.jpg/800px-Coptotermes_formosanus_shiraki.jpg'
    'mosquitos.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Aedes_aegypti_biting_human.jpg/800px-Aedes_aegypti_biting_human.jpg'
    'chinches.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bed_bug%2C_Cimex_lectularius.jpg/800px-Bed_bug%2C_Cimex_lectularius.jpg'
    'desinsectacion.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fumigating_for_mosquitoes_in_Florida.jpg/800px-Fumigating_for_mosquitoes_in_Florida.jpg'
    'desratizacion.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Victor_Rat_Trap.jpg/800px-Victor_Rat_Trap.jpg'
    'desinfeccion.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Disinfecting_public_spaces_during_COVID-19_pandemic_in_Rwanda_05.jpg/800px-Disinfecting_public_spaces_during_COVID-19_pandemic_in_Rwanda_05.jpg'
    'fumigacion.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Structural_fumigation.jpg/800px-Structural_fumigation.jpg'
    'madera.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Woodworm_damage.jpg/800px-Woodworm_damage.jpg'
    'aves.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Bird_spikes_on_a_sign.jpg/800px-Bird_spikes_on_a_sign.jpg'
}

foreach ($key in $urls.Keys) {
    Try {
        Invoke-WebRequest -Uri $urls[$key] -OutFile "public\expressive\$key" -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" -UseBasicParsing
        Write-Host "Downloaded $key"
    } Catch {
        Write-Host "Failed to download $key - $($_.Exception.Message)"
    }
}
