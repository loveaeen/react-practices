function Header({title}){
    return (
        <>
            <Logo/>
            <Title title={title}/>
            <Nav/>
        </>
    )
} 

function Logo(){
    return (
        <h1 className="text-3xl font-bold underline">
            Logo
        </h1>
    )
} 

function Title(props){
    return (
        <h2 class="text-base/7 font-semibold text-gray-900">
            {props.title ? createTitle(props.title) : 'Default Title'}
        </h2>
    )
} 

function Nav(){
    return (
        <p class="mt-1 text-sm/6 text-gray-600">
            Nav
        </p>
    )
} 

function createTitle(title){
    return `This title is parsed by function: ${title}`;
}