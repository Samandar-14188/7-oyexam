import Rasm from '../../assets/rasm3.png'
import ButtonModal from '../ButtonModal'

export default function Modal() {
  return (
     <div className="Modal-dialog">
          <h1>THANK YOU FOR YOUR ORDER</h1>
          <p>You will receive an email confirmation shortly.</p>
          <div className="Product-main">
            <div className="modal-wrapper">
              
                <div className="Product-card">
                  <div className="cardModal">
                    <img src={Rasm} alt=" " />
                    <div className="cardModal-info">
                      <h6>sfsd</h6>
                      <p>$34</p>
                    </div>
                    <span>2x</span>
                  </div>
                </div>
            
            </div>
            <div className="modal-wrapper black">
              GRAND TOTAL
              <p>$32</p>
            </div>
          </div>

          <ButtonModal  />
        </div>
  )
}
