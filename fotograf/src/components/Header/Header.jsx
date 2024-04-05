import './Header.css'
import logo from '../../assets/Logo.png'

function HeaderAbout() {
  return (
    <div className='wrapper pt-[150px] pl-[80px]'>
        <div className="HeaderTop">
            <a href="#">
                <img src={logo} alt="" />
            </a>
        </div>
        <div className="HeaderTitle mt-[30px]">
            <h2 className='text-[#B38B6D] text-[25px] leading-[32px] font-medium mt-[30px]'>финальный сюрприз</h2>
            <h1 className='text-[#FCFCF5] text-[40px] font-medium leading-[104px] mt-[15px]'>доступ ко всем <br /> материалам Города</h1>
            <p className='text-[20px] font-medium leading-[50px] text-[#B38B6D] mt-[20px]'>стоимостью 34 000 рублей — <span className='text-[#fcfcf5]'>в 10 раз дешевле</span> </p>
        </div>
    </div>
  )
}

export default HeaderAbout