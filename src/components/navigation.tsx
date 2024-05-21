type Props={
    name: string
    linkUrl: string;
};

const Navigation = ({name, linkUrl}:Props) =>{
    return<>
    <a className="link" href={linkUrl} target="blank">{name}</a>
    
    </>
    
}
export default Navigation;