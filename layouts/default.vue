<template>
    <div class="max-w-xl mx-auto border border-cyan-100 rounded-lg mt-10 p-1">
        <nav class="bg-slate-200 p-3 rounded-lg">
            <ul class="flex gap-2">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="user">User</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="about">About</NuxtLink>
                </li>
            </ul>
        </nav>
        <div class="p-5">
            <slot></slot>
        </div>
    </div>
</template>