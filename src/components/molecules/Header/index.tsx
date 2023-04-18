import { signIn, signOut, useSession } from "next-auth/react";
import Button from "../../atoms/Button";
const Header: React.FC = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl text-white">
            {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        </p>
        <Button onClick={sessionData ? () => void signOut() : () => void signIn()}>
            {sessionData ? "Sign out" : "Sign in"}
        </Button>
        </div>
    );
};

export default Header;