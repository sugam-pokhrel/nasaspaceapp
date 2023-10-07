"use client"
import Navbar from '../daisycompo/Navbar/Navbar';
import React from 'react';

const Page = () => {
  return (
    <>
      <Navbar />
      <h1 className='text-center'>About</h1>
      <div className='aboutSection grid grid-cols-2'>
        <div className='aboutSectionLeft'>
          <h2 className='text-3xl'>
            What is <b>SciMarket</b> ?
          </h2>
          <p>
            SciMarket is a web app that addresses the challenge of fostering
            openness, transparency, and interdisciplinary teamwork within the
            scientific community, indirectly contributing to broader space
            research goals It eases the process of starting a science based
            project as it unites researchers, promoting open science through
            project listings that emphasize transparency, peer review, and
            interdisciplinary teamwork. This web app offers project tracking,
            private meetings, version control, and collaboration tools while
            safeguarding user data. It will have additional features like paid
            projects and a marketplace for buying and selling materials.
          </p>
          <img src='./sciMart.png' width='auto' />
        </div>
        <div className='aboutSectionRight'>
          <h2 className='text-3xl'>
            Why <b>SciMarket</b>?
          </h2>
          <p>
            <b>Facilitating Project Initiation:</b> SciMarket streamlines the
            start of science-based projects by connecting researchers, making it
            easier for them to embark on scientific endeavors.
            <br />
            <b>Promoting Open Science:</b> The platform encourages open science
            by featuring project listings that emphasize transparency, peer
            review, and interdisciplinary teamwork. This fosters a culture of
            sharing and collaboration in the scientific community.
            <br />
            <b>Comprehensive Project Management: </b>SciMarket offers a suite
            of project management tools, including project tracking, private
            meetings, and version control, to help researchers efficiently manage
            their scientific projects.
            <br />
            <b>Data Security:</b> While promoting collaboration, SciMarket also
            prioritizes user data security to safeguard sensitive research
            information.
            <br />
            <b>Future Enhancements: </b>The platform is poised to introduce
            additional features such as paid projects and a marketplace for
            buying and selling materials, enhancing its utility for scientists.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;