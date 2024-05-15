import UseAuthContext from "../../Hooks/UseAuthContext";

const AdminHome = () => {
    const { user } = UseAuthContext()

    return (
        <div>
            <h1 className="uppercase text-3xl font-bold">Hi, welcome   ---{user ? user?.displayName : 'back'}---</h1>
            
        </div>
    );
};

export default AdminHome;