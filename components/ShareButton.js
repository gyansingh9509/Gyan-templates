import React from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';


const ShareButton = () => {
    const router =useRouter();
    const copyLink =()=>{
        navigator.clipboard.writeText(`https://localhost/3000/${routr.query.handle}`);
        toast('copied o clipboard');
    }
  return (
    <>
      <div className="absolute cursor-pointer top-28 left-10 bg-indigo-200 p-2 rounded-md z-10 shadow-md border-2 border-indigo-400" onClick={copyLink}>
        <img className='w-4' src="/svg/share.svg" alt='share' />
      </div>
    </>
  )
}

export default ShareButton
