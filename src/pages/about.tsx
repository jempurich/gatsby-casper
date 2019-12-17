import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <h2>Purich Pumiwatana</h2><br/>
              <h3>Experience</h3>
              <h4>Front End Developer / <strong>TDCX</strong></h4>
              <span>September 2018 - Present, Kuala Lumpur, Malaysia</span><br/>
              <span>Google Project - Tag Implementation Specialist (TAG TEAM)</span>
              <ul>
                <li>Selected as an instructor for conversion tracking hackathon workshop by Google Thailand</li>
                <li>Successfully helped sales teams deploying leads with more than 80% implementation rate for further campaigns optimization</li>
                <li>Received excellent feedback from advertisers with 100% CSAT (customer satisfaction survey)</li>
              </ul>
              <h4>Digital Director ​/ <strong>Vathanagul Group co. LTD</strong></h4>
              <span>May 2016 - August 2018, Bangkok, Thailand</span>
              <ul>
                <li>Grew revenue for print magazine company by creating an online magazine website</li>
                <li>Transformed an offline marketing campaign into an online marketing by using digital media assolutions to their business</li>
                <li>Increased revenue more than 30% of total company revenue via online platforms</li>
              </ul>
              <h4>WebDeveloper /​ <strong>KiteCreations</strong></h4>
              <span>May 2015 - July 2015, Bangkok, Thailand</span>
              <ul>
                <li>Increased client’s web page speed score to 90/100 by eliminating render block in above fold content</li>
              </ul>
              <br/>
              <h3>Education</h3>
              <h4>King Mongkut's University of Technology Thonburi</h4>
              <span>Bachelor of Science - BS, Applied Computer Science</span><br/>
              <span>2013 - 2016, Bangkok, Thailand</span>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
