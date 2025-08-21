#!/bin/bash

# Instalar clean-css-cli se não estiver instalado
if ! command -v cleancss &> /dev/null
then
    npm install -g clean-css-cli
fi

# Combinar todos os arquivos CSS
cat assets/css/reset.css \
    assets/css/variables.css \
    assets/css/animations.css \
    assets/css/components.css \
    assets/css/layout.css \
    assets/css/interactive.css \
    assets/css/responsive.css > assets/css/main.css

# Minificar o arquivo combinado
cleancss -o assets/css/main.min.css assets/css/main.css

# Remover o arquivo temporário
rm assets/css/main.css

echo "CSS files combined and minified successfully!"
