const express = require("express");
const https = require("https");
const baseUrl = "https://api.hatchways.io"

function getBlogPosts(tag) {
    try {
        const options = {
            hostname: baseUrl,
            path: `/assessment/blog/posts?tag=${tag}`,
            method: "GET"
        }

        const req = https.request(options, res => {
            console.log('test:' + res);
        })
    } catch {
        
    }
    
}

module.exports = {
    getBlogPosts
};