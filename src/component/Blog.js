import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">

                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <h1 className='text-3xl '>what is cors?</h1>
                        </div>
                        <p className="text-gray-800">
                            Cross-Origin Resource Sharing is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                        </p>
                        <br />





                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">

                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <h1 className='text-3xl text-gray-800'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                        </div>
                        <p className="text-gray-800">
                            The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When we build cross-platform apps with our Apple platforms, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data
                        </p>
                        <br />
                        <p>
                            Firebase helps us develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                        </p>
                        <br />
                        <p>
                            <h2 className='font-bold'>Other Option</h2>
                            <br />
                            <li>Auth0  </li>
                            <li>CyberArk Identity</li>
                            <li>Duo</li>
                            <li>Entrust Datacard </li>
                            <li>Okta</li>
                            <li>OneLogin</li>
                            <li>OneSpan</li>
                            <li>Ping Identity</li>
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">

                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <h1 className='text-3xl text-gray-800'>How does the private route work?</h1>
                        </div>
                        <p className="text-gray-800">
                            Private Route  are Protected Content from public user.In website some content are only for resistared user , Thouse contant are private by Private Router.
                        </p>
                        <br />
                        <p className="text-gray-800">
                            Private routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page
                        </p>




                    </div>

                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">

                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <h1 className='text-3xl text-gray-800'>What is Node? How does Node work?</h1>
                        </div>
                        <p className="text-gray-800">
                            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications
                        </p>
                        <br />
                        <p className="text-gray-800">
                            Node.js is the JavaScript runtime environment which is based on Google’s V8 Engine i.e. with the help of Node.js we can run the JavaScript outside of the browser. Other things that you may or may not have read about Node.js is that it is single-threaded, based on event-driven architecture, and non-blocking based on the I/O model
                        </p>
                        <br />
                        <p className="text-gray-800">
                        Node.js is made of Chrome V8 engine which is written in C++ and Libuv which is a multi-platform C library that provides support for asynchronous I/O based events on event loops and thread loops.
                        </p>




                    </div>

                </div>


            </div>

        </div>
    );
};

export default Blog;