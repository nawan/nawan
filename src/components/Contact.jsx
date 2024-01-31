import React from 'react'

const Contact = () => {
    return (
        <section id="contact" class="pt-36 pb-32 dark:bg-slate-900">
            <div class="container">
                <div class="w-full px-4">
                    <div class="max-w-xl mx-auto text-center mb-16">
                        <h4 class="font-semibold text-lg text-primary mb-2 uppercase">Contact</h4>
                        <h2 class="font-bold text-dark text-3xl mb-4
                    sm:text-4xl lg:text-5xl dark:text-white">Hubungi Saya</h2>
                        <p class="font-medium text-md text-secondary md:text-lg">Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Cum saepe tempore magnam quasi
                            distinctio expedita natus aliquam dolor accusamus voluptatem!
                        </p>
                    </div>
                    <form action="">
                        <div class="w-full lg:w-2/3 lg:mx-auto">
                            <div class="w-full px-4 mb-8">
                                <label for="name" class="text-base font-bold text-primary">
                                    Nama
                                </label>
                                <input type="text" id="name" class="w-full bg-slate-200
                            text-dark p-3 rounded-md focus:outline-none
                            focus:ring-primary focus:ring-1 focus:border-primary" />
                                <label for="email" class="text-base font-bold text-primary">
                                    Email
                                </label>
                                <input type="email" id="email" class="w-full bg-slate-200
                            text-dark p-3 rounded-md focus:outline-none
                            focus:ring-primary focus:ring-1 focus:border-primary" />
                                <label for="message" class="text-base font-bold text-primary">
                                    Pesan
                                </label>
                                <textarea type="text" id="pesan" class="w-full bg-slate-200
                            text-dark p-3 rounded-md focus:outline-none
                            focus:ring-primary focus:ring-1 focus:border-primary
                            h-32">
                                </textarea>
                            </div>
                            <div class="w-full px-4">
                                <button class="text-base font-semibold text-white bg-primary
                            py-3 px-8 rounded-full w-full hover:opacity-80
                            hover:shadow-lg transition duration-500">Kirim</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact