import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div >
      <Head>
        <title>Richer Lands - All in one solution for your farming</title>
        <meta name="Richer Lands provides the best products for you farm." content="Richer Lands is all in one solution for your farm!!!" />
        <link rel="icon" href="/richerland.jpg" />
      </Head>
      <div className="flex justify-center">
        <div className="container py-10">
          <div className="text-4xl font-semibold text-center p-5">Top Picks For You</div>
          <section className="text-gray-600 body-font">
            <div className="container p-4 xl:px-44 py-10 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full rounded-lg h-full object-cover object-center" src="/drone.jpg" />
                    <div className="px-8 py-10 rounded-lg relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full rounded-lg h-full object-cover object-center" src="/fertilizer.jpg" />
                    <div className="px-8 py-10 rounded-lg relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full rounded-lg h-full object-cover object-center" src="/seed.jpg" />
                    <div className="px-8 py-10 rounded-lg relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full rounded-lg h-full object-cover object-center" src="/pesticides.jpg" />
                    <div className="px-8 py-10 rounded-lg relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full rounded-lg h-full object-cover object-center" src="/herbicides.png" />
                    <div className="px-8 py-10 rounded-lg relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full rounded-lg h-full object-cover object-center" src="/pay.png" />
                    <div className="px-8 py-10 rounded-lg relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
