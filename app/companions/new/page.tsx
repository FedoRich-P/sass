import {redirect} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {CompanionForm} from "@/components/Companion/CompanionForm";
import {auth} from "@clerk/nextjs/server";
// import {newCompanionPermissions} from "@/lib/actions/companion.actions";

export default async function NewCompanions() {
    const { userId } = await auth();
    if(!userId) redirect('/sign-in');

    // const canCreateCompanion = await newCompanionPermissions();

    let a = 2

    return (
        <main className=" w-full md:w-3/4  lg:w-1/2 xl:w-2/5 items-center justify-center">
            {a ? (
                <article className="w-full gap-4 flex flex-col border p-5 rounded-md">
                    <h1>Companion Builder</h1>

                    <CompanionForm />
                </article>
            ) : (
                <article className="companion-limit">
                    <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230} />
                    <div className="cta-badge">
                        Upgrade your plan
                    </div>
                    <h1>You’ve Reached Your Limit</h1>
                    <p>You’ve reached your companion limit. Upgrade to create more companions and premium features.</p>
                    <Link href="/subscription" className="btn-primary w-full justify-center" >
                        Upgrade My Plan
                    </Link>
                </article>
            )}
            <article className="companion-limit">
                <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230}/>
                <div className="cta-badge">
                    Upgrade your plan
                </div>
                <h1>You’ve Reached Your Limit</h1>
                <p>You’ve reached your companion limit. Upgrade to create more companions and premium features.</p>
                <Link href="/subscription" className="btn-primary w-full justify-center">
                    Upgrade My Plan
                </Link>
            </article>
        </main>
    )
}