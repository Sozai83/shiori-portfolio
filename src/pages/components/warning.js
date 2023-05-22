import Styles from '../../styles/warning.module.scss'


//Home page - Skills/Tech stack section
export default function Warning({isfName, islName, isEmail, isQuery, emailVal, entered}) {
  return (
    <section className={Styles.warning}>
        {!emailVal &&
        (<p>Please enter valid email address.</p>)
        }
        { ((isfName || islName || isEmail || isQuery) && entered) &&
            (
                <>
                <p>The following field(s) are mandatory:</p>
                <ul>
                    {isfName && (<li>First Name</li>)}
                    {islName && (<li>Last Name</li>)}
                    {isEmail && (<li>Email</li>)}
                    {isQuery && (<li>Questions</li>)}
                </ul>
                </>
            )
        }

    </section>
      

  )
}