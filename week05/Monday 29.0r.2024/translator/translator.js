function helloWorld(language) {
    switch (language) {
        case 'es':
            return "Hola Mundo"
        case 'de':
            return "Hallo Welt"
        case 'it':
            return "Ciao Mondo"
        case 'fr':
            return "Bonjour le Monde"
        default:
            return "Hello World"
    }
}

console.log(helloWorld('es'));//