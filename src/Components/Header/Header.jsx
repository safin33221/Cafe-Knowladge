import profile from '../../../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto py-4'>
            <h1 className="text-2xl font-bold text-purple-600">Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;