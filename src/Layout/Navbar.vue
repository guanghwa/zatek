<script setup lang="ts">
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from '@/components/ui/menubar'
</script>

<template>
    <Menubar class="justify-between bg-transparent absolute">
        <MenubarMenu>
            <MenubarTrigger class="p-0">
                <img src="@/assets/Logo-ZaTek.jpeg" class="w-20 h-11 rounded-sm" />
            </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger class="!px-4 !py-2.5 text-md bg-red-400 text-white">Contact</MenubarTrigger>
        </MenubarMenu>
    </Menubar>
</template>