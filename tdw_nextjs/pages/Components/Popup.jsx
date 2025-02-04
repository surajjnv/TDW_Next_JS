// pages/contact.js
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  // Simulating server-side data fetch
  const companyBasicDetail = {
    pagelinktype: context.query.pagelinktype || 'enquiry',
  };
  const HEADER_NVAR = { FRANCHISE_LINK: 'Franchise' };
  const url = context.req.url || '/';
  const mod_id = 'someModId';
  const display_id = 'someDisplayId';

  return {
    props: {
      companyBasicDetail,
      HEADER_NVAR,
      url,
      mod_id,
      display_id,
    },
  };
}

export default function Popup({ companyBasicDetail, HEADER_NVAR, url, mod_id, display_id }) {
  const [description, setDescription] = useState('');
  const [mobile, setMobile] = useState('');
  const router = useRouter();

  // Determine the title based on pagelinktype
  const getTitle = () => {
    switch (companyBasicDetail.pagelinktype) {
      case 'enquiry':
        return 'Contact <span class="fw7">Us</span>';
      case 'franchisee':
        return `<span class="fw7">${HEADER_NVAR.FRANCHISE_LINK} Enquiry Form</span>`;
      default:
        return 'Send us a <span class="fw7">Quick Message</span>';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { description, mobile, mod_id, display_id };

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Form submitted successfully!');
        router.push('/success');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <article className="m63_scsn pr">
        <h2 dangerouslySetInnerHTML={{ __html: getTitle() }} />
        <form onSubmit={handleSubmit} className="m63_cnt_frm bg4 br5">
          <textarea
            rows="4"
            cols="40"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell us about your requirement"
            className="bsb db p10 w1 mt15"
          />
          <div className="pr m63_mb_inp df aic">
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength="10"
              placeholder="Enter Your Mobile"
              className="db m63_mbl req_class validate w1"
            />
          </div>
          <button type="submit" className="db m63_sbmt_btn bg6 clr2 br5">
            Send
          </button>
        </form>
      </article>
    </>
  );
}
