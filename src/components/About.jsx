import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import '../assets/css/background.css';

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 700
        })
    }, [])

    return (
        <section id='about' class="pt-10 pb-7 bg-green-50 bg-home dark:bg-dark">
            <div class="container">
                <div class="flex flex-wrap">
                    <div class="w-full px-4 mb-10 lg:w-1/2" data-aos={"fade-up-right"}>
                        <h4 class="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
                        <h2 class="font-bold text-dark text-3xl mb-5 
                    max-w-md lg:text-4xl dark:text-white">Colaborative and Responsive</h2>
                        <p class="font-medium text-base text-secondary max-w-xl">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                            Voluptatibus in voluptatem saepe ab nisi rerum vitae!</p>
                    </div>
                    <div class="w-full px-4 lg:w-1/2" data-aos={"fade-up-left"}>
                        <h2 class="font-bold text-dark text-3xl mb-5 
                    max-w-md lg:text-4xl dark:text-white">Temukan saya di</h2>
                        <p class="font-medium text-base text-secondary mb-6
                    lg:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Magnam dignissimos omnis optio architecto eligendi atque
                            ea consequatur veritatis distinctio quam.
                        </p>
                        <div class="flex items-center">
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" class="w-9 h-9 mr-3 rounded-full
                        flex justify-center items-center border border-slate-300
                            hover:border-primary hover:bg-primary hover:text-white
                            text-slate-300">
                                <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>YouTube</title>
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505
                                    3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017
                                    3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016
                                    3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 
                                    0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 
                                    12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 
                                    3.568z" />
                                </svg>
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="w-9 h-9 mr-3 rounded-full
                        flex justify-center items-center border border-slate-300
                        hover:border-primary hover:bg-primary hover:text-white
                        text-slate-300">
                                <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>Instagram</title>
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126
                            1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 
                            1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 
                            1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 
                            1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 
                            1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896
                                1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211
                                0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 
                                0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405
                                0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646
                                1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                </svg>
                            </a>

                            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" class="w-9 h-9 mr-3 rounded-full
                        flex justify-center items-center border border-slate-300
                        hover:border-primary hover:bg-primary hover:text-white
                        text-slate-300">
                                <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>Twitter</title>
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127
                            1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 
                            3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 
                            4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557
                            2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>

                            <a href="https://www.discord.com/" target="_blank" rel="noreferrer" class="w-9 h-9 mr-3 rounded-full
                        flex justify-center items-center border border-slate-300
                        hover:border-primary hover:bg-primary hover:text-white
                        text-slate-300">
                                <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>Discord</title>
                                    <path
                                        d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083
                            1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363
                            19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528
                            1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952
                            1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743
                            0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986
                            0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077
                            0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419
                            0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 
                            0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" class="w-9 h-9 mr-3 rounded-full
                        flex justify-center items-center border border-slate-300
                        hover:border-primary hover:bg-primary hover:text-white
                        text-slate-300">
                                <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>LinkedIn</title>
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
                            1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14
                            0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0
                            23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About