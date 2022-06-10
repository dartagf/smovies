 const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e33f58992e3ca4f010ab78baa3dd1f10',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;