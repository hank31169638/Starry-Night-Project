import dynamic from "next/dynamic";

const SignInForm = dynamic(() => import('@/component/auth/signin/signinform'))
export default function Page() {

    return (
        <>
            <SignInForm/>
        </>
    )
}