export const Video = ({src}:{src: string}) => {
    return (
        <div style={{height: "400px"}}>
            <video width="100%" controls style={{height: '100%', objectFit: 'contain'}}>
              <source src={src} />
              Your browser does not support the video tag.
            </video>
        </div>
    )
}