import Layout from '../layout/Layout';
import Seo from '../components/seo';
import { useTranslation } from 'react-i18next';
import ExperienceCard from '../components/cv/containers/ExperienceCard';

const StarIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute -ml-2 -mt-2 text-yellow-600"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </>
  );
};

const ClockIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 ml-1 -mt-1 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </>
  );
};

const Cv = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title="Curriculum Vitae" />

      <div className="p-6 mx-auto page   print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">
        <header className="flex items-center mb-8 ">
          <div className="initials-container mr-5 text-base leading-none text-white bg-gray-900 font-medium px-3">
            <div className="initial text-center">K</div>
            <div className="text-center initial">S</div>
          </div>
          <h1 className="text-2xl font-semibold text-black pb-px">
            Kenneth Suarez Guineart
          </h1>
        </header>
        <div>
          <h1 className="text-base font-semibold text-black -mt-8">
            {t('titleDevPosition')}
          </h1>
        </div>
        <section className="mt-4 first:mt-0">
          <div className="break-inside-avoid">
            <h2 className="mb-2 font-bold tracking-widest text-sm2 text-black print:font-bold">
              {t('basicInformationTittle')}
            </h2>
            <div className="grid grid-cols-2 gap-4 text-black">
              <div>
                <span className="flex flex-inline text-center rounded-t-md p-2 bg-gray-300 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  {t('contactDetails')}
                </span>
                <div className="p-2 border-2 border-gray-300 rounded-b-md">
                  {t('phoneNumberField')}: <b> +34604144510 </b> <br />
                  {t('emailField')}: <b> Kenneth7e7a@gmail.com </b> <br />
                  {t('githubField')}: <b> @polopopeye </b> <br />
                  {t('LinkedInField')}: <b> /in/kennethsuarez/ </b> <br />
                </div>
              </div>
              <div>
                <span className="flex flex-inline text-center rounded-t-md p-2 bg-gray-300 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  {t('LanguagesTittle')}
                </span>
                <div className="p-2 border-2 border-gray-300 rounded-b-md">
                  Español: {t('highLang')} <br />
                  English: {t('normalLang')} <br />
                  Català: {t('lowLang')} <br />
                </div>
              </div>
            </div>
          </div>

          <section className="break-inside-avoid">
            <p className="mt-2.1 text-md text-gray-800 leading-normal">
              <div className="p-2 m-2">
                {t('description1')}
                <hr className="my-4" />
                {t('description2')}
              </div>
              <h2 className="mt-4 mb-2 font-bold tracking-widest text-sm2 text-black print:font-bold">
                {t('techs')}
              </h2>
              <div className=" grid grid-cols-3 md:grid-cols-6 print:grid-cols-6 gap-2 text-center">
                <div className="grid rounded-xl border-solid border-4 border-yellow-100">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">TypeScript</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 3 {t('years')}
                  </span>
                </div>

                <div className="grid rounded-xl border-solid border-4 border-yellow-100">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">React</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> &gt; 4 {t('years')}
                  </span>
                </div>

                <div className="grid rounded-xl border-solid border-4 border-yellow-100">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold"> Tailwind CSS </h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 3 {t('years')}
                  </span>
                </div>

                <div className="grid rounded-xl border-solid border-4 border-yellow-100">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">Node JS </h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> &gt; 4 {t('years')}
                  </span>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-yellow-100">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">Next JS </h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 3 {t('years')}
                  </span>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-yellow-100">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">Nest JS </h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 3 {t('years')}
                  </span>
                </div>

                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <h6 className="font-bold">Firebase</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 3 {t('years')}
                  </span>
                </div>

                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <h6 className="font-bold">MongoDB</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 3 {t('years')}
                  </span>
                </div>

                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <h6 className="font-bold">Gatsby </h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 2 {t('years')}
                  </span>
                </div>

                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <h6 className="font-bold">React Native</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 1 {t('year')}
                  </span>
                </div>

                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <h6 className="font-bold">Go lang</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 1 {t('year')}
                  </span>
                </div>

                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <h6 className="font-bold"> TensorFlowJS</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 1 {t('year')}
                  </span>
                </div>
              </div>

              <div className="mt-8 mb-0 pb-0">{t('techSub')}</div>
              <br></br>
              <div className=" grid grid-cols-3 md:grid-cols-6 print:grid-cols-6 gap-1 text-center">
                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <h6 className="font-bold">MySQL & ORM</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon>&gt; 4 {t('years')}
                  </span>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <h6 className="font-bold">AWS</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 2 {t('years')}
                  </span>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">GCP</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 3 {t('years')}
                  </span>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <h6 className="font-bold">Heroku </h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 3 {t('years')}
                  </span>
                </div>
                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <StarIcon></StarIcon>
                  <h6 className="font-bold">Jest/Cypress</h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> 3 {t('years')}
                  </span>
                </div>

                <div className="grid rounded-xl border-solid border-4 border-gray-300">
                  <h6 className="font-bold">Jquery </h6>
                  <span className="text-sm">
                    <ClockIcon></ClockIcon> &gt; 4 {t('years')}
                  </span>
                </div>
              </div>
            </p>
            <h1 className="text-black font-bolder my-2">
              {t('techSub2')}
              <a href="https://kennethsuarez.es/tech/">
                https://kennethsuarez.es/tech/
              </a>
            </h1>
          </section>
        </section>

        <section className="first:mt-0">
          <div className="break-inside-avoid">
            <hr className="mt-5 mb-1"></hr>
            <h2 className="mt-4 mb-4 font-bold tracking-widest text-sm2 text-black print:font-bold">
              {t('experience')}
            </h2>

            <ExperienceCard
              title={'LambdaLoopers'}
              dates={t('october') + '2023 - ' + t('january') + ' 2023'}
              description={
                <>
                  {t('job9desc')} <br />
                  {t('job9desc1')}
                </>
              }
            />

            <ExperienceCard
              title={'Union Avatars'}
              dates={t('may') + '2023 - ' + t('october') + ' 2023'}
              description={
                <>
                  {t('job8desc')} <br />
                  {t('job8desc1')}
                </>
              }
            />
            <ExperienceCard
              title={'Embat Technologies SL'}
              dates={t('may') + '2022 - ' + t('february') + ' 2023'}
              description={
                <>
                  {t('job7desc')} <br />
                  {t('job7desc1')}
                </>
              }
            />

            <ExperienceCard
              title={'MVST.'}
              dates={
                <>
                  {t('february')} 2022 - {t('may')} 2022
                </>
              }
              description={
                <>
                  {t('job6desc')} <br />
                  {t('job6desc1')}
                </>
              }
            />

            <ExperienceCard
              title={'Amaris Consulting & innovation SL'}
              dates={
                <>
                  {t('april')} 2021 - {t('february')} 2022
                </>
              }
              description={
                <>
                  {t('job5desc')} <br />
                  {t('job5desc1')}
                  <br></br>
                  {t('job5desc2')}
                </>
              }
              referenceSpan="Ref: Saita Giovanni, Project Manager, +34 695 947 076"
            />

            <ExperienceCard
              title={'1d3a SL'}
              dates={
                <>
                  {t('march')} 2020 - {t('december')} 2020
                </>
              }
              description={
                <>
                  {t('job4desc')} <br />
                  {t('job4desc1')}
                </>
              }
              referenceSpan="Ref: Joan Carbó Laguna, CTO, +34 607 700 297 - juan.carbo@1d3a.com"
            />

            <ExperienceCard
              title={'Ibermática SA'}
              dates={
                <>
                  {t('january')} 2020 - {t('march')} 2020
                </>
              }
              description={<>{t('job3desc')}</>}
              referenceSpan="Ref: Juan Miguel Barajas, Project Manager +34 606 428 989"
            />
            <ExperienceCard
              title={'Hard Monkey PC Ltd.'}
              dates={
                <>
                  {t('january')} 2017 - {t('january')} 2019
                </>
              }
              description={
                <>
                  {t('job2desc')}
                  <br />
                  <ul className="list-disc ml-8">
                    <li> {t('job2desc1')}</li>
                    <li> {t('job2desc2')}</li>
                    <li>{t('job2desc3')}</li>
                    <li>{t('job2desc4')}</li>
                    <li>{t('job2desc5')}</li>
                  </ul>
                </>
              }
            />

            <ExperienceCard
              title={'Sirastudio SL'}
              dates={
                <>
                  {t('january')} 2017 - {t('december')} 2017
                </>
              }
              description={<>{t('job1desc')}</>}
              referenceSpan="Ref: Marc Torrente Cesteros, CEO +34 616 248 949"
            />
          </div>
        </section>
        <section className="mt-8 first:mt-0">
          <div className="break-inside-avoid">
            <hr className="mt-8 mb-1"></hr>
            <h2 className="mt-4 mb-4 font-bold tracking-widest text-sm2 text-black print:font-bold">
              {t('educationTitle')}
            </h2>

            <ExperienceCard
              title={'IES Ausies March - SMIX'}
              dates={<>2013 - 2015</>}
              description={<> {t('education1')}</>}
            />

            <ExperienceCard
              title={'Tallinna Tehnikaülikool - MSC in Cyber Security'}
              titleLink={'https://taltech.ee/en/cyber-msc'}
              dates={<>2018 - 2020</>}
              description={<> {t('education2')}</>}
            />
          </div>
        </section>

        <h1 className="p-4 text-center  text-gray-900 font-medium bg-white">
          {t('footercvmsg')}
        </h1>
      </div>
    </Layout>
  );
};

export default Cv;
