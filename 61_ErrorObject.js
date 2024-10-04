try {
    console.log(Harry)
    throw new ReferenceError("SwiftNLIFT IT TECH IS BEST")
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
    
}