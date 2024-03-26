import Image from "next/image";
import bannerShop from "../../public/images/banner-toko.webp";
import frontOffice from "../../public/images/front-office.webp";
import activityEmp1 from "../../public/images/activity-1.webp";
import Hero from "@/(components)/hero";

const MainCards = [
    {
        id: "C1",
        name: "Kaos",
        url: "./galleries/shirts",
        imgSrc: "/images/shirts/abu-abu-muda.webp",
        imgAlt: "Kaos Abu-abu Muda",
        description: `Kami adalah salah satu produsen kaos di
    Surabaya. Kami memproduksi kaos polos Cotton
    Combed 30S & 24S, Polo, Salur. Kami juga
    menyediakan jasa sablon & print DTF pada
    kaos.`,
    },
    {
        id: "C2",
        name: "Tas",
        url: "./galleries/bags",
        imgSrc: "/images/bags/spunbonds/tas-10.jpg",
        imgAlt: "Tas Spunbond",
        description: `Kami adalah salah satu pencetus produsen
    kustom tas di Surabaya. Kami memproduksi tas
    spunbond, mika, blacu, kanvas, kain goni,
    hampers dan kustom tas belanja. Kami juga
    menyediakan jasa sablon & print DTF pada
    tas.`,
    },
    {
        id: "C3",
        name: "DTF",
        url: "./galleries/DTFs",
        imgSrc: "/images/printed-DTF.webp",
        imgAlt: "Print DTF",
        description: `Kami adalah salah satu produsen kaos di
    Surabaya. Kami memproduksi kaos polos Cotton
    Combed 30S & 24S, Polo, Salur. Kami juga
    menyediakan jasa sablon & print DTF pada
    kaos.`,
    },
    {
        id: "C4",
        name: "BLog",
        url: "./galleries/blogs",
        imgSrc: "/images/undraw_undraw_undraw_notebook.png",
        imgAlt: "Ilustrasi Blog by Undraw",
        description: `Yuk cek blog kami untuk tips, trik, & pengetahuan tentang tas atau kaos bersama kami ya!`,
    },
    {
        id: "C5",
        name: "Sosial Media",
        url: "./galleries/social-media",
        imgSrc: "/images/undraw_Social_dashboard.png",
        imgAlt: "Ilustrasi Sosial Media by Undraw",
        description: `Yuk cek sosial media kami untuk cari referensi kaos & tas kesukaan kamu ya`,
    },
];

const CompanyAdvantages = [
    {
        id: "A1",
        description: "Melayani pesanan partai (massal) maupun indi (satuan).",
    },
    {
        id: "A2",
        description:
            "Berpengalaman lama dibidang konveksi kaos didukung Tenaga dan SDM yang handal.",
    },
    { id: "A3", description: "Harga yang kompetitif." },
];

function ShowGoogleMap() {
    return (
        <div class="flex items-center justify-center h-96 rounded bg-gray-50 dark:bg-gray-800">
            <iframe
                className="block h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.245894963414!2d112.78414807441045!3d-7.32625487204826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7facfc197b455%3A0xe727cb16c6667a4a!2sAlfasarana%20Produsen%20Tas%20Spunbond%20%7C%20Goodiebag%20%7C%20Goody%20bag%20%7C%20Tas%20Kain%20%7C%20Tas%20Kemasan!5e0!3m2!1sid!2sid!4v1709956358507!5m2!1sid!2sid"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

function CompanyMap() {
    return (
        <section id="our-map" class="pt-20 py dark:bg-gray-900">
            <div class="py-2 px-4 mx-auto text-center lg:py-4">
                <MainTitleH2 title={"Temukan Kami di Peta"} />
                <div class="pb-4 px-4 mx-auto text-center space-y-10 lg:py-8">
                    <ShowGoogleMap />
                </div>
            </div>
        </section>
    );
}

function MainTitleH2({ title }) {
    return (
        <h2 class="mb-8 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white uppercase">
            {title}
        </h2>
    );
}

function CardItem({ card }) {
    return (
        <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={card.url}>
                <Image
                    className="rounded-t-lg"
                    sizes="100vw"
                    width={300}
                    height={500}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    src={card.imgSrc}
                    alt={card.imgAlt}
                />
            </a>
            <div class="p-5">
                <a href="./public/gallery/bags.html">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {card.name}
                    </h5>
                </a>

                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {card.description}
                </p>
                <a
                    href={card.url}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-800 dark:focus:ring-pink-800"
                >
                    Lihat galeri
                    <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
                <a
                    href="tasspunbond.com"
                    class="inline-flex items-center ml-2 px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-800 dark:focus:ring-pink-800"
                >
                    Telusuri lebih
                    <svg
                        class="w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

function CompanyProduct({ card }) {
    return (
        <section id="product-us" class="pt-20 dark:bg-gray-900">
            <div class="py-2 px-4 mx-auto text-center lg:py-4">
                <MainTitleH2 title={"Produk Kami"} />
                <div class="pb-4 mx-auto text-center space-y-10 lg:py-8">
                    {MainCards.map((card) => (
                        <CardItem key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ListItem({ value }) {
    return (
        <li class="flex flex-col items-center space-x-3 px-4 py-2 text-center rtl:space-x-reverse">
            <svg
                class="w-10 h-10 mb-2 text-green-500 dark:text-pink-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    fill-rule="evenodd"
                    d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z"
                    clip-rule="evenodd"
                />
            </svg>

            <span>{value.description}</span>
        </li>
    );
}

function CompanyAdvantagesList({ companyAdvantagesLists }) {
    return (
        <ul class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 text-left text-gray-500 dark:text-gray-400">
            {companyAdvantagesLists.map((companyAdvantage) => (
                <ListItem key={companyAdvantage.id} value={companyAdvantage} />
            ))}
        </ul>
    );
}

function CompanyBanner() {
    return (
        <div class="flex items-center justify-center my-6 rounded bg-gray-50 dark:bg-gray-800">
            <Image
                class="rounded-md"
                src={bannerShop}
                alt="Banner CV Focus Alfasarana"
            />
        </div>
    );
}

function CompanyWorkImgs() {
    return (
        <div class="flex flex-col space-y-2 sm:grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                <Image
                    class="rounded-md"
                    src={frontOffice}
                    alt="Front Office Focus Alfasarana"
                />
            </div>
            <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                <Image
                    class="rounded-md"
                    src={bannerShop}
                    alt="Divisi Jahit CV Focus Alfasarana"
                />
            </div>
            <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                <Image
                    class="rounded-md"
                    src={activityEmp1}
                    alt="Aktivitas pegawai 1 CV Focus Alfasarana"
                />
            </div>
            <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                <Image
                    class="rounded-md"
                    src={activityEmp1}
                    alt="Aktivitas pegawai 1 CV Focus Alfasarana"
                />
            </div>
        </div>
    );
}

function CompanyWork() {
    return (
        <>
            <CompanyBanner />
            <CompanyWorkImgs />
        </>
    );
}

function CompanyAddrs() {
    return (
        <li class="flex flex-col items-center justify-center">
            <div class="flex h-10 w-10 items-center justify-center rounded bg-pink-900 dark:bg-pink-600 text-gray-50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                </svg>
            </div>
            <div>
                <h3 class="py-3 mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Alamat Kami
                </h3>
                <p class="text-gray-600 text-base dark:text-slate-400">
                    Medokan Asri Timur RL V/i-16
                </p>
                <p class="text-gray-600 text-base dark:text-slate-400">
                    Rungkut, Surabaya
                </p>
            </div>
        </li>
    );
}

function CompanyContact() {
    return (
        <li class="flex flex-col items-center justify-center">
            <div class="flex h-10 w-10 items-center justify-center rounded bg-pink-900 dark:bg-pink-600 text-gray-50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
            </div>
            <div>
                <h3 class="py-3 mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Kontak
                </h3>
                <p class="text-gray-600 text-base dark:text-slate-400">
                    Mobile: +62 811 333 6618
                </p>
                <p class="text-gray-600 text-base dark:text-slate-400">
                    Office: 031-8786 2547
                </p>
            </div>
        </li>
    );
}

function CompanyWorkHour() {
    return (
        <li class="flex flex-col items-center justify-center">
            <div class="flex h-10 w-10 items-center justify-center rounded bg-pink-900 dark:bg-pink-600 text-gray-50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                </svg>
            </div>
            <div>
                <h3 class="py-3 mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Jam Kerja
                </h3>
                <p class="text-gray-600 text-base dark:text-slate-400">
                    Senin - Jumat: 08:00 - 21:00
                </p>
                <p class="text-gray-600 text-base dark:text-slate-400">
                    Sabtu: 08:00 - 15:00
                </p>
            </div>
        </li>
    );
}

function SectionAboutCompany() {
    return (
        <section
            id="about-company"
            class="pt-20 pb-2 px-4 mx-auto text-center lg:py-4"
        >
            <MainTitleH2 title={"Kantor Kami"} />

            <div class="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-8">
                <ul class="mb-6 md:mb-0 flex flex-col gap-8 justify-evenly">
                    <CompanyAddrs />
                    <CompanyContact />
                    <CompanyWorkHour />
                </ul>
            </div>
        </section>
    );
}

function SectionCompanyContact() {
    return (
        <div class="pb-4 px-4 mx-auto text-center space-y-10 lg:py-8">
            <CompanyContact />
        </div>
    );
}

function SectionCompanyProfile() {
    return (
        <div class="pb-4 px-4 mx-auto text-center space-y-10 lg:py-8">
            <CompanyWork />
        </div>
    );
}

function AboutCompany() {
    return (
        <section class="pt-20 pb-2 px-4 mx-auto text-center lg:py-4">
            <MainTitleH2 title={"Tentang Kami"} />
            <div class="pb-4 px-4 mx-auto text-center space-y-10 lg:py-8">
                <CompanyAdvantagesList
                    companyAdvantagesLists={CompanyAdvantages}
                />
                <SectionCompanyProfile />
                <SectionAboutCompany />
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <CompanyProduct />
                <CompanyMap />
                <AboutCompany />
            </main>
        </>
    );
}
