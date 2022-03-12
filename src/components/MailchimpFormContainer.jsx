import React from "react";
// import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpFormContainer = ({ closeModal, u, id, Component }) => {
  const postUrl = `https://zettablock.us14.list-manage.com/subscribe/post?u=${u}&id=${id}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Component
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
            setVisible={closeModal}
          />
        )}
      />
    </>
  );
};

export default MailchimpFormContainer;
