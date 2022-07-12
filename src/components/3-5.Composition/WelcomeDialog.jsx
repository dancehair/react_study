import React from 'react';
import Dialog from './Dialog';
import CustomDialog from './CustomDialog';

function WelcomeDialog(props) {
  // return (
  //   <div>
  //     <Dialog>
  //       <h1>Welcome</h1>
  //       <h5>Thank you</h5>
  //     </Dialog>
  //   </div>
  // );

  return <CustomDialog title={<button>Welcome</button>} description='Thanks' />;
}

export default WelcomeDialog;
