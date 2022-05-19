import React from 'react';

const BodyArticle = ({ postinHTML }) => {
  return (
    <>
      <div className="min-h-full flex">
        <div className=" flex flex-col w-0 flex-1">
          <main className="flex-1">
            <div className="py-8 xl:py-10">
              <div className="w-full mx-auto px-4 ">
                <div>
                  <div className="font-sans">{postinHTML}</div>
                </div>

                {/* TODO: MAKE COMMENTS FOR ARTICLES */}
                {/* <section
                  aria-labelledby="activity-title"
                  className="mt-8 xl:mt-10"
                >
                  <div>
                    <div className="divide-y divide-gray-200  bg-primary ">
                      <div className="pb-4 ">
                        <h2
                          id="activity-title"
                          className="text-lg font-medium text-tertiary p-4"
                        >
                          Comments
                        </h2>
                      </div>
                      <h1>COMMENTS</h1>
                    </div>
                  </div>
                </section> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default BodyArticle;
