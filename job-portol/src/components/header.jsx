import { IconBrandCraft } from '@tabler/icons-react';

const Header = () => {
    return(
        <div className="flex justify-between items-center w-full px-6 h-28 bg-black text-white">
            <div className='flex gap-3'>
                <IconBrandCraft className="size={70}"/>
                LOGO
            </div>
            <div>LINKS</div>
            <div>SETTINGS</div>
        </div>
    );
}
export default Header;