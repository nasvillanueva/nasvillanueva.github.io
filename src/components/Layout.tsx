import Header from "@components/Header";
import * as React from "react";
import * as PropTypes from "prop-types";


const Layout = ({useHeaderOverlay = true, children}: any) => {
  return <div className={ `h-full flex flex-col ${ useHeaderOverlay ? 'pt-52' : 'pt-0' }` } >
    <Header useOverlay={useHeaderOverlay} />
    <div className="grow z-0 container mx-auto mb-20">
      {children}
    </div>
    <footer className="grow-0 shrink-0 bg-zinc-800 text-white text-sm p-10 flex justify-between">
      <div></div>
      <div className="text-[0.5rem]">&#169; 2022 Jonas Villanueva</div>
    </footer>
  </div>
}

Layout.propTypes = {
  useHeaderOverlay: PropTypes.bool,
};

export default Layout;
