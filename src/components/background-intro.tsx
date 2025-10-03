import background from '../assets/background.svg'
import logo from '../assets/logo.svg'

export function BackgroundIntro() {
    return (
        <div className="bg-another-purple col-span-3 flex items-center justify-center relative">
            <img src={background} alt="" className="absolute w-[663px] h-[584px]" />
            <img src={logo} alt="" className="absolute" />
        </div>
    )
}