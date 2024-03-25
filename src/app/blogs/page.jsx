import About from "@/(components)/About";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function MainBlog() {
    const blogs = await prisma.blog.findMany();

    // await prisma.blog.create({
    //     data: {
    //         title: "Grand Opening Produsen Kaos",
    //         content: "Kami adalah produsen kaos terbaik di Surabaya. Kami menyediakan berbagai macam kaos custom, kaos polos, Cotton Combed 30S, kaos Polo, kaos salur & print DTF. Kami juga menyediakan bubuk DTF untuk desain kaos kerenmu. Kami juga menyediakan kaos polos dengan harga terjangkau. Kami juga menyediakan kaos polos dengan kualitas terbaik. Kami juga menyediakan kaos polos dengan berbagai macam warna. Kami juga menyediakan kaos polos dengan berbagai macam ukuran. Kami juga menyediakan kaos polos dengan berbagai macam model. Kami juga menyediakan kaos polos dengan berbagai macam desain. Kami juga menyediakan kaos polos dengan berbagai macam jenis. Kami juga menyediakan kaos polos dengan berbagai macam bahan. Kami juga menyediakan kaos polos dengan berbagai macam merk. Kami juga menyediakan kaos polos dengan berbagai macam motif. Kami juga menyediakan kaos polos dengan berbagai macam warna. Kami juga menyediakan kaos polos dengan berbagai macam ukuran. Kami juga menyediakan kaos polos dengan berbagai macam model. Kami juga menyediakan kaos polos dengan berbagai macam desain. Kami juga menyediakan kaos polos dengan berbagai macam jenis. Kami juga menyediakan kaos polos dengan berbagai macam bahan. Kami juga menyediakan kaos polos dengan berbagai macam merk. Kami juga menyediakan kaos polos dengan berbagai macam motif. Kami juga menyediakan kaos polos dengan berbagai macam warna. Kami juga menyediakan kaos polos dengan berbagai macam ukuran. Kami juga menyediakan kaos polos dengan berbagai macam model. Kami juga menyediakan kaos polos dengan berbagai macam desain. Kami juga menyediakan kaos polos dengan berbagai macam jenis. Kami juga menyediakan kaos polos dengan berbagai macam bahan. Kami juga menyediakan kaos polos dengan berbagai macam merk. Kami juga menyediakan kaos polos dengan berbagai macam motif.",
    //         author: "Ninis Aulya R.",
    //     },
    // });

    return (
        <>
            <About />
            {/* <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>{blog.title}</li>
                ))}
            </ul> */}
            <main className="space-y-10">
                <section
                    id="welcome"
                    className="bg-center bg-no-repeat bg-cover bg-welcome-jumbotron-alfasarana bg-gray-700 bg-blend-multiply sm:bg-gray-700"
                >
                    <div className="px-4 mx-auto max-w-screen-xl text-center pt-32 py-24 lg:py-56">
                        <h1 className="mt-8 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                            PRODUSEN KAOS BERPENGALAMAN DI SURABAYA
                        </h1>
                        <p className="mb-2 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                            Dapatkan kabar dan informasi terbaru dari kami.
                            Custom kaos & tas terpercaya bersama kami.
                        </p>
                    </div>
                </section>

                <section id="product-us" className="pt-20 dark:bg-gray-900">
                    <div className="py-2 px-4 mx-auto text-center lg:py-4">
                        <h2 className="mb-8 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white uppercase">
                            Cerita Terbaru
                        </h2>

                        <div className="pb-4 mx-auto text-center space-y-10 lg:py-8">
                            <form className="max-w-sm mx-auto">
                                <label
                                    for="website-admin"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Berlangganan untuk mendapat cerita terbaru!
                                </label>
                                <div className="flex mb-3">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                                            />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        id="website-admin"
                                        className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-pink-500 focus:border-pink-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                        placeholder="Langganan melalui e-mail"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 dark:text-pink-50"
                                >
                                    Langganan!
                                </button>
                            </form>

                            <div className="space-y-16">
                                <article className="group">
                                    <div className=""></div>
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-2 lg:pt-0 text-balance text-left">
                                            Perkenalkan produsenkaos.com: Sebuah
                                            website kami yang berfokus pada
                                            produsen kaos custom, kaos polos,
                                            Cotton Combed 30S, kaos Polo, kaos
                                            salur & print DTF
                                        </h3>
                                        <div className="mt-2 mb-4">
                                            <p className="text-justify text-slate-900 dark:text-slate-200 font-light text-sm">
                                                Saat awal kami membangun produk
                                                kami, kami meluncurkan website
                                                kaos pertama kali sebagai galeri
                                                utama produksi kaos. Kami
                                                sebagai produsen kaos ingin
                                                memberikan layanan website
                                                terbaik untuk Anda dalam dunia
                                                custom kaos polos.
                                            </p>
                                        </div>
                                        <dl className="order-first text-left">
                                            <dt className="sr-only">Date</dt>
                                            <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                                                <time datetime="2023-12-20T20:00:00.000Z">
                                                    December 1, 2020
                                                </time>
                                            </dd>
                                        </dl>
                                    </div>
                                    <a
                                        className="flex items-center text-sm text-sky-500 font-medium"
                                        href="./blog-1.html"
                                    >
                                        <span className=""></span>
                                        <span className="text-pink-600 focus:underline dark:hover:underline">
                                            Read more
                                            <span className="sr-only">
                                                , Perkenalkan tasspunbond.com:
                                                Sebuah website untuk Anda dalam
                                                membuat custom tas
                                            </span>
                                        </span>
                                        <svg
                                            className="mt-px overflow-visible ml-2.5 text-pink-700 dark:text-pink-600"
                                            width="3"
                                            height="6"
                                            viewBox="0 0 3 6"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M0 0L3 3L0 6" />
                                        </svg>
                                    </a>
                                </article>
                                <article className="">
                                    <div className=""></div>
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-2 lg:pt-0 text-balance text-left">
                                            Perkenalkan tasspunbond.com: Sebuah
                                            website untuk Anda dalam membuat
                                            custom tas
                                        </h3>
                                        <div className="mt-2 mb-4">
                                            <p className="text-justify text-slate-900 font-light text-sm">
                                                Saat awal kami membangun produk
                                                kami, kami meluncurkan website
                                                tas pertama kali sebagai galeri
                                                utama produksi tas. Kami sebagai
                                                produsen tas ingin memberikan
                                                layanan website terbaik untuk
                                                Anda dalam dunia custom tas.
                                                Kami menyediakan berbagai macam
                                                tas......
                                            </p>
                                        </div>
                                        <dl className="order-first text-left">
                                            <dt className="sr-only">Date</dt>
                                            <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                                                <time datetime="2023-12-20T20:00:00.000Z">
                                                    December 1, 2020
                                                </time>
                                            </dd>
                                        </dl>
                                    </div>
                                    <a
                                        className="flex items-center text-sm text-sky-500 font-medium"
                                        href="./blog-2.html"
                                    >
                                        <span className=""></span>
                                        <span className="text-pink-600 focus:underline dark:hover:underline">
                                            Read more
                                            <span className="sr-only">
                                                , Perkenalkan goodiebag_sby:
                                                Akun Instagram Galeri Tas
                                            </span>
                                        </span>
                                        <svg
                                            className="mt-px overflow-visible ml-2.5 text-pink-700 dark:text-pink-600"
                                            width="3"
                                            height="6"
                                            viewBox="0 0 3 6"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M0 0L3 3L0 6" />
                                        </svg>
                                    </a>
                                </article>
                                <article className="group">
                                    <div className=""></div>
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-2 lg:pt-0 text-balance text-left">
                                            Perkenalkan goodiebag_sby: Akun
                                            Instagram Galeri Tas
                                        </h3>
                                        <div className="mt-2 mb-4">
                                            <p className="text-justify text-slate-900 font-light text-sm">
                                                Anda bingung mau cari referensi
                                                untuk membuat custom tas Anda?,
                                                yuk, kunjungi akun Instagram
                                                kami yaitu goodiebag_sby ya. Di
                                                sana kamu bisa melihat berbagai
                                                model untuk referensi tas custom
                                                kamu.....
                                            </p>
                                        </div>
                                        <dl className="order-first text-left">
                                            <dt className="sr-only">Date</dt>
                                            <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                                                <time datetime="2023-12-20T20:00:00.000Z">
                                                    December 1, 2019
                                                </time>
                                            </dd>
                                        </dl>
                                    </div>
                                    <a
                                        className="flex items-center text-sm text-sky-500 font-medium"
                                        href="./blog-2.html"
                                    >
                                        <span className=""></span>
                                        <span className="text-pink-600 focus:underline dark:hover:underline">
                                            Read more
                                            <span className="sr-only">
                                                , Perkenalkan goodiebag_sby:
                                                Akun Instagram Galeri Tas
                                            </span>
                                        </span>
                                        <svg
                                            className="mt-px overflow-visible ml-2.5 text-pink-700 dark:text-pink-600"
                                            width="3"
                                            height="6"
                                            viewBox="0 0 3 6"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M0 0L3 3L0 6" />
                                        </svg>
                                    </a>
                                </article>
                                <article className="group">
                                    <div className=""></div>
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-2 lg:pt-0 text-balance text-left">
                                            Perkenalkan produsenkaos.sby: Akun
                                            Instagram Galeri Kaos
                                        </h3>
                                        <div className="mt-2 mb-4">
                                            <p className="text-justify text-slate-900 font-light text-sm">
                                                Anda bingung mau cari referensi
                                                untuk membuat custom kaos Anda?,
                                                yuk, kunjungi akun Instagram
                                                kami yaitu produsenkaos.sby ya.
                                                Di sana kamu bisa melihat
                                                berbagai model untuk referensi
                                                kaos polos. kamu juga bisa print
                                                DTF lo untuk desain kaos
                                                kerenmu. Kami juga menyediakan
                                                bubuk DTF......
                                            </p>
                                        </div>
                                        <dl className="order-first text-left">
                                            <dt className="sr-only">Date</dt>
                                            <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                                                <time datetime="2023-12-20T20:00:00.000Z">
                                                    December 1, 2019
                                                </time>
                                            </dd>
                                        </dl>
                                    </div>
                                    <a
                                        className="flex items-center text-sm text-sky-500 font-medium"
                                        href="./blog-3.html"
                                    >
                                        <span className=""></span>
                                        <span className="text-pink-600 focus:underline dark:hover:underline">
                                            Read more
                                            <span className="sr-only">
                                                , Perkenalkan produsenkaos.sby:
                                                Akun Instagram Galeri Kaos
                                            </span>
                                        </span>
                                        <svg
                                            className="mt-px overflow-visible ml-2.5 text-pink-700 dark:text-pink-600"
                                            width="3"
                                            height="6"
                                            viewBox="0 0 3 6"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M0 0L3 3L0 6" />
                                        </svg>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
