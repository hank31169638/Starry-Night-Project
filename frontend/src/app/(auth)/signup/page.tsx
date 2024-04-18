import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import('@/component/auth/signup/signupform'))

export default function Page() {
    return (
        <>
            <SignUpForm/>
        </>
    )
}