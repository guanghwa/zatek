<template>
    <Card class="w-[550px]">
        <CardHeader class="gap-y-5 p-10">
            <CardTitle class="text-4xl h-[46px] font-medium text-center">Get in touch</CardTitle>
            <CardDescription class="text-center text-base">Our friendly team would love to hear from you.</CardDescription>
        </CardHeader>
        <CardContent class="px-10">
            <form>
                <div class="grid items-center w-full gap-6">
                    <div class="grid grid-cols-2 gap-8">
                        <div class="flex flex-col space-y-1.5">
                            <Label for="name" class="text-center text-gray-600">Name</Label>
                            <Input id="name" placeholder="Your Name" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                            <Label for="company" class="text-center text-gray-600">Company</Label>
                            <Input id="company" placeholder="Company Name" />
                        </div>
                    </div>
                    <div class="flex flex-col space-y-1.5">
                        <Label for="email" class="text-center text-gray-600">Email</Label>
                        <Input id="email" placeholder="Your Email" />
                    </div>
                    <div class="flex flex-col space-y-1.5">
                        <Label for="subject" class="text-center text-gray-600">Subject</Label>
                        <Input id="subject" placeholder="Subject" />
                    </div>
                    <div class="flex flex-col space-y-1.5">
                        <Label for="message" class="text-center text-gray-600">Message</Label>
                        <Input id="message" placeholder="Message" />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter class="flex justify-between px-10 pb-6">
            <Button class="w-full bg-gray-600 px-4 py-3 text-base h-12.5">Send message</Button>
        </CardFooter>
    </Card>
</template>

<script setup lang='ts'>
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>