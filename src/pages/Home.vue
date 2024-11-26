<template>
    <div>
        <div class="px-10 pt-24 xl:px-24 2xl:px-44 bg-img pb-40">
            <p class="text-7xl pb-5">Zatek <br /> Software Business</p>
            <p class="text-2xl text-gray-600"> Elevate your Business with AI Solutions from Zatek </p>
            <Button class="py-2.5 px-5 text-lg w-56 h-14 bg-red-400 mt-10 mb-2.5"> Contact </Button>
        </div>
        <div class="px-10 py-25 flex justify-center items-center 2xl:gap-40 xl:gap-32">
            <div class="flex gap-20 justify-center">
                <div class="w-44">
                    <p class="text-5xl font-bold pb-2.5"> 50+</p>
                    <p class="text-xl text-gray-600">Global Partners</p>
                </div>
                <div class="w-44">
                    <p class="text-5xl font-bold pb-2.5"> 10K+</p>
                    <p class="text-xl text-gray-600">Retail Clients</p>
                </div>
            </div>
            <div class="pb-2.5">
                <p class="text-6xl font-bold">Our Impressive <br /> Experience</p>
            </div>
        </div>
        <div class="pt-25 px-20 2xl:px-80 xl:px-40 pb-12.5 bg-black">
            <div class="py-7 grid grid-cols-2 gap-x-4 gap-y-10">
                <div>
                    <div class="border-t-white border-t-2 w-40 "></div>
                    <p class="pt-5 pb-2.5 text-white text-2xl font-semibold font-mono">AI Integration</p>
                    <p class="text-gray-100 text-lg">Optimize your business and elevate it with AI</p>
                </div>
                <div>
                    <div class="border-t-white border-t-2 w-40 "></div>
                    <p class="pt-5 pb-2.5 text-white text-2xl font-semibold font-mono">User Analytics</p>
                    <p class="text-gray-100 text-lg">Leverage AI to Analyze Customer Behavior and preference, Tailoring
                        your Services for Optimal Effectiveness</p>
                </div>
                <div>
                    <div class="border-t-white border-t-2 w-40 "></div>
                    <p class="pt-5 pb-2.5 text-white text-2xl font-semibold font-mono">Data Security</p>
                    <p class="text-gray-100 text-lg">Optimize your business data protection with the latest advancements
                        in technology</p>
                </div>
                <div>
                    <div class="border-t-white border-t-2 w-40 "></div>
                    <p class="pt-5 pb-2.5 text-white text-2xl font-semibold font-mono">Customer Support</p>
                    <p class="text-gray-100 text-lg">Boost customer Satisfaction with our around-the-clock support
                        systems</p>
                </div>
            </div>
        </div>
        <div class="px-40 py-12.5">
            <p class="text-center text-6xl font-bold pb-5 ">Transform Your Business with Our AI Services</p>
            <div class="grid grid-cols-1 xl:grid-cols-2 pt-12.5 gap-x-4 gap-y-10">
                <div class="bg-gray-100 p-8 rounded-sm">
                    <p class="text-2xl font-bold pb-2.5">Professional Expert Consultation Services</p>
                    <p class="text-base">Receive customized guidance from our AI specialists to utilize technology for
                        enhancing your business's expansion</p>
                </div>
                <div class="bg-gray-100 p-8 rounded-sm">
                    <p class="text-2xl font-bold pb-2.5">Revolutionizing Product Innovation</p>
                    <p class="text-base">Enhance your product development with our AI insights and integration services for
                        cutting-edge solutions</p>
                </div>
                <div class="bg-gray-100 p-8 rounded-sm">
                    <p class="text-2xl font-bold pb-2.5">Optimize and Revise Your Offerings</p>
                    <p class="text-base">Harness AI to Infuse a Breath of Fresh Air into Your Products</p>
                </div>
                <div class="bg-gray-100 p-8 rounded-sm">
                    <p class="text-2xl font-bold pb-2.5">Boost Your Online Presence</p>
                    <p class="text-base">If you're not visible online or looking to enhance your internet presence, now's
                        your chance.</p>
                </div>
            </div>
        </div>
        <div class="bg-black p-4 grid grid-cols-1 xl:grid-cols-2 justify-center gap-10">
            <div class="flex justify-center items-center">
                <p class="text-center text-white text-6xl font-bold leading-loose">Connect With Zatek Today</p>
            </div>
            <div class="flex justify-center py-20">
                <MessageBox />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Button } from "@/components/ui/button";
import MessageBox from '@/components/MessageBox.vue'
</script>