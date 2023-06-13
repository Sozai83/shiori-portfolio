import Styles from '../../../styles/home/Thankyou.module.scss'


//Home page - Skills/Tech stack section
export default function Thankyou({changeSubmitStatus}) {

  return (
    <section className={Styles.thankyou}>
        <h2>Thank you for contacting!</h2>
        <p>I will be in touch with you soon.</p>
        <p>If you don't hear from me within 5 business day,<br/>
        please email me at '<a href="mailto:chiku.dev@proton.me">chiku.dev@proton.me</a>'</p>
        <button onClick={()=>changeSubmitStatus()}>Contact Shiori again</button>
    </section>
  )}