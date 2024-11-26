<script setup lang="ts">
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from '@/components/ui/menubar'
</script>

<template>
    <Menubar class="justify-between">
        <MenubarMenu>
            <MenubarTrigger class="!text-2xl">Zatek</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger class="!px-4 !py-2.5 text-md">Contact</MenubarTrigger>
        </MenubarMenu>
    </Menubar>
</template>