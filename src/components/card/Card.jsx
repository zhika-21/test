import React from 'react'
import styles from './Card.scss'

const Card = ({result}) => {
    let display;
    if (result) { }
    else {
        display = 'No charachters Found :/'
    }
    if (result) {
        display = result.map((el) => {
            let { id, image, name, status, location } = el;

            return (
                <div key={id}
                    className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark'
                >
                    <div className={`${styles.card}d-flex flex-column justify-content-center`}>
                        <img className={`${styles.img} img-fluid`} src={image} alt="" />
                        <div className={`${styles.content}`} >
                            <div className='fs-5 fs-bold mb-4'>{name}</div>
                            <div>
                                <div className='fs-6 fw-normal'>Last Location</div>
                                <div className='fs-5'>{location.name}</div>
                            </div>
                        </div> 


                    </div>

                </div>
            )
        })
    }
  return (
    <div>{display}</div>
  )
}

export default Card;