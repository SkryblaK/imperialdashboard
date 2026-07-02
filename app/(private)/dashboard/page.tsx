import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DashboardStats } from "@/public/Data"
import { FaCalendar, FaClock, FaMousePointer } from 'react-icons/fa';

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-vertical:h-4 data-vertical:self-auto"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Build Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex gap-4 items-center text-foreground/90">
              <span className="flex items-end flex-col text-xs font-bold mr-4">
                <h1 className="flex items-center gap-2">
                  {new Date().toLocaleDateString('en-US', {weekday: 'short'})}, {new Date().toLocaleString('default', {dateStyle:'long'})}
                  <FaCalendar />
                </h1>
                <span className="flex items-center gap-1 uppercase">
                  <p>{new Date().toLocaleString('default', {timeStyle:'short'})},</p>
                  <p className="flex items-center gap-1 uppercase">
                    {new Date().toLocaleString('default', {timeZoneName:'short'}).slice(23,26)}
                    <FaClock />
                  </p>
                </span>
              </span>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 grid-cols-2 md:grid-cols-4">
            {
              DashboardStats.map((stat, index) => {
                  return <div className="aspect-video rounded-xl bg-muted/50 flex flex-col items-center justify-center shadow shadow-primary bg-linear-to-br dark:from-red-400 from-red-950 via-primary dark:to-red-950 to-red-400 hover:dark:from-red-950 hover:from-red-400 hover:via-primary hover:dark:to-red-400 hover:to-red-950 hover:text-background not-dark:hover:shadow-foreground hover:shadow-md hover:mx-1 hover:px-3 hover:text-sm hover:cursor-pointer" key={index}>
                    <p className="text-base lg:text-xl xl:text-2xl text-white">{stat.icon}</p>
                    <h1 className="md:hidden flex font-extralight text-base lg:text-3xl text-background dark:font-medium">
                      {stat.nameSM}
                    </h1>
                    <h1 className="hidden md:flex font-extralight text-2xl text-background dark:font-medium">
                      {stat.name}
                    </h1>
                    <h2 className="font-black text-2xl md:text-3xl lg:text-4xl">
                      {stat.value}
                    </h2>

                    {/* Button */}
                    <div className="sticky bottom-0 right-0 max-md:hidden">
                      <Button className="not-dark:bg-chart-5 text-white" variant={"outline"} size={'xs'}>
                        <FaMousePointer /> View More
                      </Button>
                    </div>
                  </div>
                })
            }
          </div>
          <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min border-primary ">
            <div className="m-2 bg-chart-1 rounded-xl p-8 shadow-[0_0_4px] shadow-primary">
              Visual Graph
            </div>
            <div className="">
              hjh
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
