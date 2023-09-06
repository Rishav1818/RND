import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/navbar.css';
import '../styles/globals.css';
import '../styles/event.css';
import 'animate.css';

import Head from 'next/head';
import { useEffect } from 'react';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const animation = document.querySelectorAll('.animation');

    const options = {
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          if (entry.target.classList.contains('animate')) {
            entry.target.classList.remove('animate');
          }
        }
      });
    }, options);

    animation.forEach((animate) => {
      observer.observe(animate);
    });
  });

  const positionFooter = () => {
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    main.style.minHeight = `calc(100vh - ${footer.offsetHeight}px)`;
  };

  useEffect(() => {
    positionFooter();
    window.addEventListener('resize', positionFooter);
  }, []);

  return (
    <>
      <Head>
      <title>Reasearch and Development </title>
      <link rel="shortcut icon" href="/" />
        <style>
          @import
          url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
          @import
          url(https://fonts.googleapis.com/css?family=Bebas+Neue:regular);
          @import
          url(https://fonts.googleapis.com/css?family=Staatliches:regular);
          @import
          url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
        </style>
      </Head>

      <Navbar />
      <main className="mt-16 h-full w-full">
        <div className="fixed inset-0 -z-10 flex items-center justify-center w-screen h-screen opacity-[0.08] mt-16">
          {/* <Image
            src="/cover1.png"
            layout="fill"
            objectFit="contain"
            alt="cover"
          /> */}
        </div>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
