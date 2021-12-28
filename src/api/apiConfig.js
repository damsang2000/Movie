const apiConfig={
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey:'127ae5cb9fda45709484f2e98362c635',
    originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;