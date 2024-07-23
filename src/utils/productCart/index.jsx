import Cards from '../../components/Card';
import logoone from '../../assets/cartimage.png'
import logotwo from '../../assets/twoimage.png';
import logothree from '../../assets/cartthree.png';
export default function CartShop() {
  return (
    <div className='CartShop-container'>
        <Cards title='HEADPHONES' logo={logoone}  />
        <Cards title='SPEAKERS' logo={logotwo}  />
        <Cards title='EARPHONES' logo={logothree}  />
    </div>
  )
}