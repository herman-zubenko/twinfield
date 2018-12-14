exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './testSpecs/check.first.link.spec.js',
        './testSpecs/follow.links.spec.js'
    ]
}