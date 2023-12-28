export default function UserProfilePage({params}: any) {
    return(
        <div className="flex flex-col items-center
        justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-5xl">Profile page 
                <span className="bg-amber-400 "> {params.id}</span>
            </p>
            
        </div>
    )
}