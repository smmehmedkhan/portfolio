#!/bin/bash
set -e

echo "Running pre-push checks..."
pnpm type-check
pnpm test
